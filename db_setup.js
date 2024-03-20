"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
//type Grade = z.infer<typeof GradeCreateInputSchema>;
function setupDb() {
    return __awaiter(this, void 0, void 0, function () {
        var data, grades, gradesData, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = [
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
                                        },
                                    },
                                    SubjectTaughtByInWhichGrade: {
                                        createMany: { data: { gradeId: "IX", subjects: ["Biology", "Geography"] } },
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
                                            role: "Teacher",
                                            gender: "Female",
                                            contact: "1234567890",
                                        },
                                    },
                                    SubjectTaughtByInWhichGrade: {
                                        createMany: {
                                            data: [
                                                {
                                                    gradeId: "IX",
                                                    exam_Subjects: ["SST"],
                                                    subjects: ["History", "Civics", "Economics"],
                                                },
                                            ],
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
                                            contact: "1234567890",
                                            role: "Teacher",
                                            gender: "Male",
                                        },
                                    },
                                    SubjectTaughtByInWhichGrade: {
                                        createMany: {
                                            data: {
                                                gradeId: "IX",
                                                exam_Subjects: ["Mathematics", "Science"],
                                                subjects: ["Algebra", "Chemistry", "Physics"],
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    ];
                    grades = [
                        "I",
                        "II",
                        "III",
                        "IV",
                        "V",
                        "VI",
                        "VII",
                        "VIII",
                        "IX",
                        "X",
                    ];
                    gradesData = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 2, 3, 8]);
                    grades.map(function (grade) { return __awaiter(_this, void 0, void 0, function () {
                        var gradeData;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.grade.findFirst({
                                        where: { grade: grade },
                                    })];
                                case 1:
                                    gradeData = _a.sent();
                                    if (gradeData !== null)
                                        gradesData.push(gradeData);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log("db already setup");
                    return [3 /*break*/, 8];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 8];
                case 3:
                    if (!!(gradesData.length === data.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.grade.deleteMany()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.teacher.deleteMany()];
                case 5:
                    _a.sent();
                    data.map(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.grade.create({ data: obj })];
                                case 1:
                                    res = _a.sent();
                                    console.log(res);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log(gradesData);
                    console.log("setup successful");
                    return [3 /*break*/, 7];
                case 6:
                    console.log("Grades data" + gradesData);
                    _a.label = 7;
                case 7: return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
// if (!(gradesData.length === data.length)) {
try {
    setupDb();
}
catch (error) {
    console.log(error);
    console.log("db already setup");
}
