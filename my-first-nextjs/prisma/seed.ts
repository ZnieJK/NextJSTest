import {test1Data} from './constants'
import { PrismaClient } from '@prisma/client'
import fetch from 'node-fetch' 
import { ApiResponse, User } from './userModel'


const prisma = new PrismaClient();

// async function assignTest1Data() {
//     for (let data of test1Data){
//         await prisma.Test1DataModel.create({
//             type: data.type,
//             name: data.name
//         })
//     }
// }
async function getSeedFromAPI() {
    const response = await fetch('https://dummyjson.com/users')
    const json = await response.json() as ApiResponse;
    const users = json.users

    // Clear existing data
    await prisma.user.deleteMany()
    await prisma.departmentSummary.deleteMany()

    const departmentStats = new Map<string, {
        male: number
        female: number
        ages: number[]
        hair: Record<string, number>
        addressUser: Record<string, string>
    }>()

    for (const user of users) {
        const {
        firstName, lastName, age, gender,
        hair, address, company
        } = user

        const department = company?.department || 'Unknown'
        const hairColor = hair?.color || 'Unknown'
        const postalCode = address?.postalCode || '00000'

        // Insert user
        await prisma.user.create({
        data: {
            id: user.id,
            firstName,
            lastName,
            age,
            gender,
            hairColor,
            postalCode,
            department
        }
        })

        // Aggregate department data
        if (!departmentStats.has(department)) {
        departmentStats.set(department, {
            male: 0,
            female: 0,
            ages: [],
            hair: {},
            addressUser: {}
        })
        }

        const stats = departmentStats.get(department)!
        gender === 'male' ? stats.male++ : stats.female++
        stats.ages.push(age)
        stats.hair[hairColor] = (stats.hair[hairColor] || 0) + 1
        stats.addressUser[`${firstName}${lastName}`] = postalCode
    }

    // Save summaries
    for (const [department, stats] of departmentStats.entries()) {
        const ageMin = Math.min(...stats.ages)
        const ageMax = Math.max(...stats.ages)

        await prisma.departmentSummary.create({
        data: {
            departmentName: department,
            maleCount: stats.male,
            femaleCount: stats.female,
            ageMin,
            ageMax,
            hairSummary: stats.hair,
            addressUsers: stats.addressUser
        }
        })
    }

    console.log('✅ Seeding complete.')

}

// async function seedTest1() {
// console.log('Seeding...');
//   const uniqueTypes = [...new Set(test1Data.map(item => item.type))];
//   await prisma.test1DataType.createMany({
//     data: uniqueTypes.map(type => ({ type })),
//     skipDuplicates: true
//   });

//   await prisma.test1DataModel.createMany({
//     data: test1Data.map(item => ({
//       type: item.type,
//       name: item.name
//     })),
//   });
// }

getSeedFromAPI().
    catch(e => {
        console.log(e);
        process.exit(1)
    }).finally(() => {
       prisma.$disconnect();
    }
)