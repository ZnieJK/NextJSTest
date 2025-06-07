import {test2APIlink} from './constants'
import { PrismaClient } from '@prisma/client'
import fetch from 'node-fetch' 
import { ApiResponse } from './userModel'


const prisma = new PrismaClient();

async function getSeedFromAPI() {
    // Fetch data from dummy API
    const response = await fetch(test2APIlink)
    const json = await response.json() as ApiResponse;
    const users = json.users

    // Clear all existing data before seeding
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

    // summaries
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
}

getSeedFromAPI().
    catch(e => {
        console.log(e);
        process.exit(1)
    }).finally(() => {
       prisma.$disconnect();
    }
)