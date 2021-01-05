import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routes';

import { BioComponent } from './pages/bio/bio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { QaComponent } from './components/qa/qa.component';
import { BhagsComponent } from './components/bhags/bhags.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
import { CertsComponent } from './components/certs/certs.component';
import { AwardsComponent } from './components/awards/awards.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    BioComponent,
    ContactComponent,
    ResumeComponent,
    SocialLinksComponent,
    HeroComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    HomeComponent,
    TimelineComponent,
    ContactSectionComponent,
    BlogComponent,
    NewsFeedComponent,
    AboutComponent,
    GalleryComponent,
    QaComponent,
    BhagsComponent,
    AccomplishmentsComponent,
    CertsComponent,
    AwardsComponent,
    PublicationsComponent,
  ],
  imports: [CommonModule, HomeRoutes],
})
export class HomeModule {}
