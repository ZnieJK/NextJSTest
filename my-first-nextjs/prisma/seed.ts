import {test1Data} from './constants'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// async function assignTest1Data() {
//     for (let data of test1Data){
//         await prisma.Test1DataModel.create({
//             type: data.type,
//             name: data.name
//         })
//     }
// }

async function seedTest1() {

  const uniqueTypes = [...new Set(test1Data.map(item => item.type))];
  await prisma.test1DataType.createMany({
    data: uniqueTypes.map(type => ({ type })),
    skipDuplicates: true
  });

  await prisma.test1DataModel.createMany({
    data: test1Data.map(item => ({
      type: item.type,
      name: item.name
    })),
  });
}

seedTest1().
    catch(e => {
        console.log(e);
        process.exit(1)
    }).finally(() => {
        prisma.$disconnnect();
    }
)