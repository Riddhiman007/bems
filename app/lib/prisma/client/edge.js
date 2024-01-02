
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  email: 'email',
  emailVerified: 'emailVerified',
  role: 'role',
  image: 'image',
  username: 'username',
  address: 'address',
  teacherId: 'teacherId'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.GradeScalarFieldEnum = {
  id: 'id',
  grade: 'grade',
  teacher_name: 'teacher_name'
};

exports.Prisma.TeacherScalarFieldEnum = {
  id: 'id',
  name: 'name',
  username: 'username',
  email: 'email',
  userId: 'userId'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  father_name: 'father_name',
  mother_name: 'mother_name',
  contact: 'contact',
  caste: 'caste',
  address: 'address',
  gender: 'gender',
  email: 'email',
  grade_name: 'grade_name',
  userId: 'userId'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  content: 'content',
  author_id: 'author_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Role = exports.$Enums.Role = {
  Student: 'Student',
  Teacher: 'Teacher',
  Admin: 'Admin'
};

exports.GradeType = exports.$Enums.GradeType = {
  nursery: 'nursery',
  jr: 'jr',
  sr: 'sr',
  I: 'I',
  II: 'II',
  III: 'III',
  IV: 'IV',
  V: 'V',
  VI: 'VI',
  VII: 'VII',
  VIII: 'VIII',
  IX: 'IX',
  X: 'X'
};

exports.Gender = exports.$Enums.Gender = {
  Male: 'Male',
  Female: 'Female'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  Grade: 'Grade',
  Teacher: 'Teacher',
  Student: 'Student',
  Post: 'Post'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Riddhiman\\Programming\\Projects\\bems\\app\\lib\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../../../prisma",
  "clientVersion": "5.7.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "MONGODB_URI",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gIm1vbmdvZGIiDQoNCiAgdXJsID0gZW52KCJNT05HT0RCX1VSSSIpDQp9DQoNCmdlbmVyYXRvciBjbGllbnQgew0KICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICA9ICIuLi9hcHAvbGliL3ByaXNtYS9jbGllbnQiDQp9DQoNCmdlbmVyYXRvciB6b2Qgew0KICBwcm92aWRlciAgICAgICAgID0gIm5weCB6b2QtcHJpc21hLXR5cGVzIg0KICBvdXRwdXQgICAgICAgICAgID0gIi4uL2FwcC9saWIvcHJpc21hL3NjaGVtYXMiDQogIHVzZU11bHRpcGxlRmlsZXMgPSB0cnVlDQogIHdyaXRlQmFycmVsRmlsZXMgPSB0cnVlDQogIGNyZWF0ZUlucHV0VHlwZXMgPSB0cnVlDQp9DQoNCm1vZGVsIEFjY291bnQgew0KICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICB1c2VySWQgICAgICAgICAgICBTdHJpbmcgIEBkYi5PYmplY3RJZA0KICB0eXBlICAgICAgICAgICAgICBTdHJpbmcNCiAgcHJvdmlkZXIgICAgICAgICAgU3RyaW5nDQogIHByb3ZpZGVyQWNjb3VudElkIFN0cmluZw0KICByZWZyZXNoX3Rva2VuICAgICBTdHJpbmc/IC8vQGRiLlRleHQNCiAgYWNjZXNzX3Rva2VuICAgICAgU3RyaW5nPyAvL0BkYi5UZXh0DQogIGV4cGlyZXNfYXQgICAgICAgIEludD8NCiAgdG9rZW5fdHlwZSAgICAgICAgU3RyaW5nPw0KICBzY29wZSAgICAgICAgICAgICBTdHJpbmc/DQogIGlkX3Rva2VuICAgICAgICAgIFN0cmluZz8NCiAgc2Vzc2lvbl9zdGF0ZSAgICAgU3RyaW5nPw0KDQogIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpDQoNCiAgQEB1bmlxdWUoW3Byb3ZpZGVyLCBwcm92aWRlckFjY291bnRJZF0pDQogIEBAbWFwKCJhY2NvdW50cyIpDQp9DQoNCm1vZGVsIFNlc3Npb24gew0KICBpZCAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogIHNlc3Npb25Ub2tlbiBTdHJpbmcgICBAdW5pcXVlDQogIHVzZXJJZCAgICAgICBTdHJpbmcgICBAZGIuT2JqZWN0SWQNCiAgZXhwaXJlcyAgICAgIERhdGVUaW1lDQogIHVzZXIgICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpDQoNCiAgQEBtYXAoInNlc3Npb25zIikNCn0NCg0KbW9kZWwgVXNlciB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICBmdWxsbmFtZSAgICAgIFN0cmluZw0KICBlbWFpbCAgICAgICAgIFN0cmluZw0KICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lPw0KICByb2xlICAgICAgICAgIFJvbGUgICAgICBAZGVmYXVsdChTdHVkZW50KQ0KICBpbWFnZSAgICAgICAgIFN0cmluZz8NCiAgdXNlcm5hbWUgICAgICBTdHJpbmcNCiAgYWRkcmVzcyAgICAgICBTdHJpbmcNCiAgc3R1ZGVudCAgICAgICBTdHVkZW50Pw0KICB0ZWFjaGVyICAgICAgIFRlYWNoZXI/DQogIHBvc3RzICAgICAgICAgUG9zdFtdDQogIGFjY291bnRzICAgICAgQWNjb3VudFtdDQogIHNlc3Npb25zICAgICAgU2Vzc2lvbltdDQogIHRlYWNoZXJJZCAgICAgU3RyaW5nPyAgIEBkYi5PYmplY3RJZA0KDQogIEBAdW5pcXVlKFtpZCwgZW1haWwsIHVzZXJuYW1lXSkNCiAgQEBtYXAoInVzZXJzIikNCn0NCg0KbW9kZWwgVmVyaWZpY2F0aW9uVG9rZW4gew0KICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICBpZGVudGlmaWVyIFN0cmluZw0KICB0b2tlbiAgICAgIFN0cmluZyAgIEB1bmlxdWUNCiAgZXhwaXJlcyAgICBEYXRlVGltZSBAbWFwKCJleHBpcmVzQXQiKQ0KDQogIEBAdW5pcXVlKFtpZGVudGlmaWVyLCB0b2tlbl0pDQogIEBAbWFwKCJ2ZXJpZmljYXRpb25fdG9rZW5zIikNCn0NCg0KbW9kZWwgR3JhZGUgew0KICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgZ3JhZGUgICAgICAgICBHcmFkZVR5cGUgQHVuaXF1ZQ0KICBjbGFzc190ZWFjaGVyIFRlYWNoZXIgICBAcmVsYXRpb24oZmllbGRzOiBbdGVhY2hlcl9uYW1lXSwgcmVmZXJlbmNlczogW3VzZXJuYW1lXSwgb25EZWxldGU6IE5vQWN0aW9uKQ0KICB0ZWFjaGVyX25hbWUgIFN0cmluZyAgICBAdW5pcXVlDQoNCiAgc3R1ZGVudHMgU3R1ZGVudFtdDQoNCiAgQEBtYXAoImdyYWRlcyIpDQp9DQoNCm1vZGVsIFRlYWNoZXIgew0KICBpZCAgICAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogIG5hbWUgICAgIFN0cmluZw0KICB1c2VybmFtZSBTdHJpbmcgQHVuaXF1ZQ0KICBlbWFpbCAgICBTdHJpbmcNCiAgY2xhc3MgICAgR3JhZGU/DQogIFVzZXIgICAgIFVzZXIgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkLCB1c2VybmFtZSwgZW1haWxdLCByZWZlcmVuY2VzOiBbaWQsIHVzZXJuYW1lLCBlbWFpbF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICB1c2VySWQgICBTdHJpbmcgQGRiLk9iamVjdElkDQoNCiAgQEB1bmlxdWUoW3VzZXJJZCwgdXNlcm5hbWUsIGVtYWlsXSkNCiAgQEBtYXAoInRlYWNoZXJzIikNCn0NCg0KbW9kZWwgU3R1ZGVudCB7DQogIGlkICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQgLy8vIEB6b2QuY3VzdG9tLm9taXQoW21vZGVsLCBpbnB1dF0pDQogIGZ1bGxuYW1lICAgIFN0cmluZw0KICB1c2VybmFtZSAgICBTdHJpbmcNCiAgZmF0aGVyX25hbWUgU3RyaW5nDQogIG1vdGhlcl9uYW1lIFN0cmluZw0KICBjb250YWN0ICAgICBTdHJpbmcNCiAgY2FzdGUgICAgICAgU3RyaW5nDQogIGFkZHJlc3MgICAgIFN0cmluZw0KICBnZW5kZXIgICAgICBHZW5kZXIgICAgQGRlZmF1bHQoTWFsZSkNCiAgZW1haWwgICAgICAgU3RyaW5nDQogIGdyYWRlICAgICAgIEdyYWRlICAgICBAcmVsYXRpb24oZmllbGRzOiBbZ3JhZGVfbmFtZV0sIHJlZmVyZW5jZXM6IFtncmFkZV0sIG9uRGVsZXRlOiBOb0FjdGlvbikNCiAgZ3JhZGVfbmFtZSAgR3JhZGVUeXBlIEB1bmlxdWUNCiAgdXNlciAgICAgICAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWQsIHVzZXJuYW1lLCBlbWFpbF0sIHJlZmVyZW5jZXM6IFtpZCwgdXNlcm5hbWUsIGVtYWlsXSwgb25EZWxldGU6IENhc2NhZGUpDQogIHVzZXJJZCAgICAgIFN0cmluZyAgICBAZGIuT2JqZWN0SWQgLy8vIEB6b2QuY3VzdG9tLm9taXQoW21vZGVsLCBpbnB1dF0pDQoNCiAgQEB1bmlxdWUoW3VzZXJJZCwgdXNlcm5hbWUsIGVtYWlsXSkNCiAgQEBtYXAoInN0dWRlbnRzIikNCn0NCg0KbW9kZWwgUG9zdCB7DQogIGlkICAgICAgICAgIFN0cmluZyBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgdGl0bGUgICAgICAgU3RyaW5nDQogIGRlc2NyaXB0aW9uIFN0cmluZw0KICBjb250ZW50ICAgICBTdHJpbmcNCiAgYXV0aG9yICAgICAgVXNlciAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24pDQogIGF1dGhvcl9pZCAgIFN0cmluZyBAZGIuT2JqZWN0SWQNCg0KICBAQG1hcCgicG9zdHMiKQ0KfQ0KDQplbnVtIFJvbGUgew0KICBTdHVkZW50DQogIFRlYWNoZXINCiAgQWRtaW4NCn0NCg0KZW51bSBHcmFkZVR5cGUgew0KICBudXJzZXJ5DQogIGpyDQogIHNyDQogIEkNCiAgSUkNCiAgSUlJDQogIElWDQogIFYNCiAgVkkNCiAgVklJDQogIFZJSUkNCiAgSVgNCiAgWA0KfQ0KDQplbnVtIEdlbmRlciB7DQogIE1hbGUNCiAgRmVtYWxlDQp9DQo=",
  "inlineSchemaHash": "ea6b903f52f20248fcdb858388f7a6ee9bcc5e67375969db3d856c1e748f4ad3",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Account\":{\"dbName\":\"accounts\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"provider\",\"providerAccountId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"provider\",\"providerAccountId\"]}],\"isGenerated\":false},\"Session\":{\"dbName\":\"sessions\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"Student\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"StudentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Teacher\",\"relationName\":\"TeacherToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"PostToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacherId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"email\",\"username\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"email\",\"username\"]}],\"isGenerated\":false},\"VerificationToken\":{\"dbName\":\"verification_tokens\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"dbName\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"identifier\",\"token\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"identifier\",\"token\"]}],\"isGenerated\":false},\"Grade\":{\"dbName\":\"grades\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grade\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GradeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"class_teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Teacher\",\"relationName\":\"GradeToTeacher\",\"relationFromFields\":[\"teacher_name\"],\"relationToFields\":[\"username\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"GradeToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Teacher\":{\"dbName\":\"teachers\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"class\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grade\",\"relationName\":\"GradeToTeacher\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TeacherToUser\",\"relationFromFields\":[\"userId\",\"username\",\"email\"],\"relationToFields\":[\"id\",\"username\",\"email\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"username\",\"email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"username\",\"email\"]}],\"isGenerated\":false},\"Student\":{\"dbName\":\"students\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.custom.omit([model, input])\"},{\"name\":\"fullname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"father_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mother_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caste\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Gender\",\"default\":\"Male\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grade\",\"relationName\":\"GradeToStudent\",\"relationFromFields\":[\"grade_name\"],\"relationToFields\":[\"grade\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grade_name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"GradeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StudentToUser\",\"relationFromFields\":[\"userId\",\"username\",\"email\"],\"relationToFields\":[\"id\",\"username\",\"email\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.custom.omit([model, input])\"}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"username\",\"email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"username\",\"email\"]}],\"isGenerated\":false},\"Post\":{\"dbName\":\"posts\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PostToUser\",\"relationFromFields\":[\"author_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"Student\",\"dbName\":null},{\"name\":\"Teacher\",\"dbName\":null},{\"name\":\"Admin\",\"dbName\":null}],\"dbName\":null},\"GradeType\":{\"values\":[{\"name\":\"nursery\",\"dbName\":null},{\"name\":\"jr\",\"dbName\":null},{\"name\":\"sr\",\"dbName\":null},{\"name\":\"I\",\"dbName\":null},{\"name\":\"II\",\"dbName\":null},{\"name\":\"III\",\"dbName\":null},{\"name\":\"IV\",\"dbName\":null},{\"name\":\"V\",\"dbName\":null},{\"name\":\"VI\",\"dbName\":null},{\"name\":\"VII\",\"dbName\":null},{\"name\":\"VIII\",\"dbName\":null},{\"name\":\"IX\",\"dbName\":null},{\"name\":\"X\",\"dbName\":null}],\"dbName\":null},\"Gender\":{\"values\":[{\"name\":\"Male\",\"dbName\":null},{\"name\":\"Female\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    MONGODB_URI: typeof globalThis !== 'undefined' && globalThis['MONGODB_URI'] || typeof process !== 'undefined' && process.env && process.env.MONGODB_URI || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

