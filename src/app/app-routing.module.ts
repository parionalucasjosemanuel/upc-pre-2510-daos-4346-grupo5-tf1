import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Public
import { TermsAndConditionsPage } from './public/pages/terms-and-conditions/terms-and-conditions.page';

// Auth Portal (inicio con login, registro y recuperación en una sola página)
import { AuthPortalComponent } from './epic06-user-profile/pages/auth-portal/auth-portal.component';

// EPIC01
import { RecommendationListComponent } from './epic01-recommendations/pages/recommendation-list/recommendation-list.component';
import { RecommendationDetailComponent } from './epic01-recommendations/pages/recommendation-detail/recommendation-detail.component';

// EPIC02
import { CompanyRatingListComponent } from './epic02-company-ratings/pages/company-rating-list/company-rating-list.component';

// EPIC03
import { JobSearchResultsComponent } from './epic03-job-search/pages/job-search-results/job-search-results.component';

// EPIC04
import { InboxComponent } from './epic04-user-contact/pages/inbox/inbox.component';
import { ContactUserComponent } from './epic04-user-contact/pages/contact-user/contact-user.component';

// EPIC05
import { SupportChatComponent } from './epic05-chatbot-support/pages/support-chat/support-chat.component';

// EPIC06
import { ProfileComponent } from './epic06-user-profile/pages/profile/profile.component';

// EPIC07
import { BestRatedCompaniesComponent } from './epic07-company-ranking/pages/best-rated-companies/best-rated-companies.component';
import { WorstRatedCompaniesComponent } from './epic07-company-ranking/pages/worst-rated-companies/worst-rated-companies.component';

// EPIC08
import { NearbyCompaniesComponent } from './epic08-map-notifications/pages/nearby-companies/nearby-companies.component';

// EPIC09
import { AccessibilityInfoComponent } from './epic09-accessibility-i18n/pages/accessibility-info/accessibility-info.component';

// EPIC10
import { SecurityInfoComponent } from './epic10-security-privacy/pages/security-info/security-info.component';

// Payments
import { SubscriptionManagementPage } from './payments/pages/subscription-management/subscription-management.page';

const routes: Routes = [
  // Página inicial: login/registro/recuperación juntos
  { path: '', component: AuthPortalComponent },

  // EPIC01
  { path: 'epic01', component: RecommendationListComponent },
  { path: 'epic01/detail', component: RecommendationDetailComponent },

  // EPIC02
  { path: 'epic02', component: CompanyRatingListComponent },

  // EPIC03
  { path: 'epic03', component: JobSearchResultsComponent },

  // EPIC04
  { path: 'epic04', component: InboxComponent },
  { path: 'epic04/contact', component: ContactUserComponent },

  // EPIC05
  { path: 'epic05', component: SupportChatComponent },

  // EPIC06
  { path: 'epic06', component: ProfileComponent },

  // EPIC07
  { path: 'epic07/best', component: BestRatedCompaniesComponent },
  { path: 'epic07/worst', component: WorstRatedCompaniesComponent },

  // EPIC08
  { path: 'epic08', component: NearbyCompaniesComponent },

  // EPIC09
  { path: 'epic09', component: AccessibilityInfoComponent },

  // EPIC10
  { path: 'epic10', component: SecurityInfoComponent },

  // Payments
  { path: 'payments', component: SubscriptionManagementPage },

  // Términos y condiciones
  { path: 'terms-and-conditions', component: TermsAndConditionsPage },

  // Fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
