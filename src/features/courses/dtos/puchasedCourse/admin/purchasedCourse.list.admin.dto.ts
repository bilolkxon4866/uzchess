import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserListAdminDto } from '../../../../auth/dtos/users/admin/users.list.admin.dto';
import { CourseListAdminDto } from '../../courses/admin/course.list.admin.dto';


export class PurchasedCourseListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty({ type: () => UserListAdminDto })
  @Type(() => UserListAdminDto)
  userId!: UserListAdminDto;

  @Expose()
  @ApiProperty({ type: () => CourseListAdminDto})
  @Type(() => CourseListAdminDto)
  coursesId!: CourseListAdminDto;

  @Expose()
  @ApiProperty()
  isCompleted!: boolean;

  @Expose()
  @ApiProperty()
  date!: string;
}