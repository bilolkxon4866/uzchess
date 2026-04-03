import { Module } from '@nestjs/common';
import { LanguageAdminController } from './controllers/languages/language.admin.controller';
import { LanguagePublicController } from './controllers/languages/language.public.controller';
import { CountryAdminController } from './controllers/countries/country.admin.controller';
import { CountryPublicController } from './controllers/countries/country.public.controller';
import { CountryPublicService } from './services/countries/country.public.service';
import { CountryAdminService } from './services/countries/country.admin.service';
import { LanguagePublicService } from './services/languages/language.public.service';
import { LanguageAdminService } from './services/languages/language.admin.service';
import { MatchesAdminService } from './services/matches/matches.admin.service';
import { MatchesPublicService } from './services/matches/matches.public.service';
import { MatchesAdminController } from './controllers/matches/matches.admin.controller';
import { MatchesPublicController } from './controllers/matches/matches.public.controller';
import { DifficultyAdminService } from './services/difficulties/difficulty.admin.service';
import { DifficultyPublicService } from './services/difficulties/difficulty.public.service';
import { DifficultyAdminController } from './controllers/difficulties/difficulty.admin.controller';
import { DifficultyPublicController } from './controllers/difficulties/difficulty.public.controller';
import { ReportCategoriesAdminService } from './services/reportCategories/reportCategories.admin.service';
import { ReportCategoriesPublicService } from './services/reportCategories/reportCategories.public.service';
import { ReportCategoriesAdminController } from './controllers/reportCategories/reportCategories.admin.controller';
import { ReportCategoriesPublicController } from './controllers/reportCategories/reportCategories.public.controller';
import { PlayersAdminService } from './services/players/players.admin.service';
import { PlayersPublicService } from './services/players/players.public.service';
import { PlayersAdminController } from './controllers/players/players.admin.controller';
import { PlayersPublicController } from './controllers/players/players.public.controller';

@Module({
  providers : [
    CountryAdminService,
    CountryPublicService,
    LanguageAdminService,
    LanguagePublicService,
    MatchesAdminService,
    MatchesPublicService,
    DifficultyAdminService,
    DifficultyPublicService,
    ReportCategoriesAdminService,
    ReportCategoriesPublicService,
    PlayersAdminService,
    PlayersPublicService
  ],
  controllers : [
    LanguageAdminController,
    LanguagePublicController,
    CountryAdminController,
    CountryPublicController,
    MatchesAdminController,
    MatchesPublicController,
    DifficultyAdminController,
    DifficultyPublicController,
    ReportCategoriesAdminController,
    ReportCategoriesPublicController,
    PlayersAdminController,
    PlayersPublicController
  ]
})

export class CommonModule {}