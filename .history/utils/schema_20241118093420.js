import { int, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const GRADES = mysqlTable('grades', {
    id: int('id').primaryKey(),
    grade: varchar('grade', { length: 10 }).notNull()
});


export const STUDENTS=mysqlTable('students',{
    id: int('id').primaryKey().autoincrement(),
    name: varchar('name',{length: 10}).notNull(),
    grade: varchar('grade', { length: 10 }).notNull(),
    contact: varchar('contact',{length:11}),
    address:varchar('address', {length:50}).notNull(),
})