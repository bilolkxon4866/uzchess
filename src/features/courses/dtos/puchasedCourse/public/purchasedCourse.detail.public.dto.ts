// purchased-courses.detail.admin.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserListAdminDto } from '../../../../auth/dtos/users/admin/users.list.admin.dto';
import { CourseDetailAdminDto } from '../../courses/admin/course.detail.admin.dto';

export class PurchasedCourseDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty({ type: () => UserListAdminDto })
  @Type(() => UserListAdminDto)
  userId!: UserListAdminDto;

  @Expose()
  @ApiProperty({ type: () => CourseDetailAdminDto })
  @Type(() => CourseDetailAdminDto)
  coursesId!: CourseDetailAdminDto;

  @Expose()
  @ApiProperty()
  isCompleted!: boolean;

  @Expose()
  @ApiProperty()
  date!: string;

  @Expose()
  @ApiProperty()
  createdAt!: string;

  @Expose()
  @ApiProperty()
  updatedAt!: string;
}