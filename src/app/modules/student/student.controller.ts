import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent = async (req: Request, res: Response) =>{
   try{
    const student = req.body
    //will call service func to send this data
    const result = await studentService.createStudentIntoDB(student);
    //send response

    res.status(200).json({
        success: true,
        message: 'Student is created successfully',
        data: result,
    });
   }catch(err){
    console.log(err);
   }
};


export const StudentControllers = {
    createStudent,
}