import { PrismaClient, GradeType } from "@prisma/client";

const prisma = new PrismaClient();
// type Grade = z.infer<typeof GradeCreateInputSchema>;
async function setupDb() {
  const data = [
    {
      grade: "I",
      class_teacher: {
        create: {
          name: "123",
          User: {
            create: {
              fullname: "123",
              address: "Nashik",
              email: "123@gmail.com",
              username: "Abc123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "II",
      class_teacher: {
        create: {
          name: "ABc",
          User: {
            create: {
              fullname: "ABc",
              address: "Nashik",
              email: "abc@gmail.com",
              username: "123Abc!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "III",
      class_teacher: {
        create: {
          name: "Unati Pawar",
          User: {
            create: {
              fullname: "Unati Pawar",
              address: "Nashik",
              email: "unati@gmail.com",
              username: "Unati123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "IV",
      class_teacher: {
        create: {
          name: "Prajakta miss",
          User: {
            create: {
              fullname: "Prajakta miss",
              address: "Nashik",
              email: "prajakta@gmail.com",
              username: "Prajakta123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "V",
      class_teacher: {
        create: {
          name: "Kehkhashan miss",
          User: {
            create: {
              fullname: "Kehkhashan miss",
              address: "Nashik",
              email: "KK@gmail.com",
              username: "KK123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "VI",
      class_teacher: {
        create: {
          name: "Neha Swaminathan",
          User: {
            create: {
              fullname: "Neha Swaminathan",
              address: "Nashik",
              email: "neha@gmail.com",
              username: "neha123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "VII",
      class_teacher: {
        create: {
          name: "Kavita miss",
          User: {
            create: {
              fullname: "Kavita miss",
              address: "Nashik",
              email: "kavita@gmail.com",
              username: "Kavita123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "VIII",
      class_teacher: {
        create: {
          name: "Aparna Chowdhury",
          User: {
            create: {
              fullname: "Aparna Chowdhury",
              address: "Moh, Chincholi phata",
              email: "aparnachoudhary229@gmail.com",
              username: "Aparna123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "IX",
      class_teacher: {
        create: {
          name: "Sunita Matharu",
          User: {
            create: {
              fullname: "Sunita Matharu",
              address: "Nashik",
              email: "sunita@gmail.com",
              username: "sunita123!",
              role: "Teacher",
            },
          },
        },
      },
    },
    {
      grade: "X",
      class_teacher: {
        create: {
          name: "Rudranarayan Chowdhury",
          User: {
            create: {
              fullname: "Rudranarayan Chowdhury",
              address: "Moh, Chincholi Phata",
              email: "rudranarayanchoudhary311@gmail.com",
              username: "Rudra123!",
              role: "Teacher",
            },
          },
        },
      },
    },
  ];

  let grades = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  let gradesData = [];
  grades.map(async (grade) => {
    const gradeData = await prisma.grade.findFirst({
      where: { grade: grade },
    });
    gradesData.push(gradeData);
  });
  if (!(gradesData.length === data.length)) {
    await prisma.grade.deleteMany();
    data.map(async (obj) => {
      const res = await prisma.grade.create({ data: obj });
      console.log(res);
    });
    console.log("setup successful");
  } else {
    console.log("db is already set up");
  }
}

try {
  setupDb();
} catch (error) {
  console.log("db already setup");
}
