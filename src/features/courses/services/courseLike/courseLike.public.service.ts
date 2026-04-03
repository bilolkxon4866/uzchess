import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../../auth/entities/users.entity';
import { Course } from '../../entities/course.entity';
import { CourseLike } from '../../entities/courseLikes.entity';

@Injectable()
export class CourseLikePublicService{
  async toggleLike(courseId : number,userId : number){

    const user = await User.findOneBy({ id: userId})
    if(!user){
      throw new NotFoundException('user with given id not found')
    }
    const course = await Course.findOneBy({ id : courseId})
    if(!course){
      throw new NotFoundException('course with given id not found')
    }

    const like = await CourseLike.findOneBy({ userId,courseId})
    if(like){
      await CourseLike.remove(like)
      return {message: "Removed"}
    }else{
      const newLike = CourseLike.create({ userId: user.id, courseId: courseId });
      await CourseLike.save(newLike);
      return {message : "Liked"}
    }
  }
}