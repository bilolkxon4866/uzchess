import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BookLikesAdminService } from '../../services/bookLikes/bookLikes.admin.service';
import { BookLikesCreateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.create.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookLikesListAdminDto } from '../../dtos/bookLikes/admin/bookLikes.list.admin.dto';
import { BookLikesDetailAdminDto } from '../../dtos/bookLikes/admin/bookLikes.detail.admin.dto';
import { BookLikesUpdateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.update.admin.dto';
import { elementAt } from 'rxjs';
import { BookLikesPublicService } from '../../services/bookLikes/bookLikes.public.service';
import { BookLikesListPublicDto } from '../../dtos/bookLikes/public/bookLikes.list.public.dto';
import { BookLikesDetailPublicDto } from '../../dtos/bookLikes/public/bookLikes.detail.public.dto';

@Controller('public/bookLikes')
export class BookLikesPublicController{

  constructor(private service : BookLikesPublicService) {
  }
  @Get()
  @ApiOkResponse({type : () => BookLikesListPublicDto,isArray : true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => BookLikesDetailPublicDto})
  async getOne(@Param('id',ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }
}