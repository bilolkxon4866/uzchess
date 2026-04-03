import { User } from '../../entities/users.entity';
import { UserCreateAdminDto } from '../../dtos/users/admin/users.create.admin.dto';
import { plainToInstance } from 'class-transformer';
import { UserListAdminDto } from '../../dtos/users/admin/users.list.admin.dto';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UsersUpdateAdminDto } from '../../dtos/users/admin/users.update.admin.dto';

export class UsersAdminService{
  async create(payload : UserCreateAdminDto,profileImage : Express.Multer.File){
    const existingUser = await User.findOne({where: {login : payload.login}})

    if(existingUser){
      throw new ConflictException('Bu login allaqachon mavjut')
    }

    const users = User.create(payload)
    if(profileImage){
      users.profileImage = profileImage.path
    }
    await User.save(users)
    return users
  }

  async getAll(){
    const users = await User.find()
    return plainToInstance(UserListAdminDto,users,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const users = await User.findOneBy({ id })
    if(!users){
      throw new NotFoundException('Users with given id not found')
    }
    return users
  }

  async update(id : number,payload : UsersUpdateAdminDto,profileImage : Express.Multer.File){
    const users = await User.findOneBy({ id })
    if(!users){
      throw new NotFoundException('Users with given id not found')
    }

    if(payload.login){
      const existingUser = await User.findOne({where : {login : payload.login}})

      if(existingUser && existingUser.id !== id){
        throw new ConflictException('Bu login allaqachon band')
      }
    }

    Object.assign(
      users,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    if(profileImage){
      users.profileImage = profileImage.path
    }

    await User.save(users)
    return users
  }

  async delete(id : number){
    const users = await User.findOneBy({ id })
    if(!users){
      throw new NotFoundException('Users with given id not found')
    }

    await User.remove(users)
  }
}