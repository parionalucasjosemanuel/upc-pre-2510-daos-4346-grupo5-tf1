import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

// ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// App & Routing
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Public
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { TermsAndConditionsPage } from './public/pages/terms-and-conditions/terms-and-conditions.page';

// Auth Portal
import { AuthPortalComponent } from './epic06-user-profile/pages/auth-portal/auth-portal.component';
import { LoginComponent } from './epic06-user-profile/pages/login/login.component';
import { RegisterComponent } from './epic06-user-profile/pages/register/register.component';
import { RecoverPasswordComponent } from './epic06-user-profile/pages/recover-password/recover-password.component';
import { UserFormComponent } from './epic06-user-profile/components/user-form/user-form.component';
import { ProfileComponent } from './epic06-user-profile/pages/profile/profile.component';
import { AuthService } from './epic06-user-profile/services/auth.service'

// Epic 01
import { RecommendationListComponent } from './epic01-recommendations/pages/recommendation-list/recommendation-list.component';
import { RecommendationFormComponent } from './epic01-recommendations/components/recommendation-form/recommendation-form.component';
import { RecommendationDetailComponent } from './epic01-recommendations/pages/recommendation-detail/recommendation-detail.component';
import { RecommendationService } from './epic01-recommendations/services/recommendation.service';

// Epic 02
import { CompanyRatingListComponent } from './epic02-company-ratings/pages/company-rating-list/company-rating-list.component';
import { CompanyRatingFormComponent } from './epic02-company-ratings/components/company-rating-form/company-rating-form.component';
import { CompanyRatingService } from './epic02-company-ratings/services/company-rating.service';

// Epic 03
import { JobSearchResultsComponent } from './epic03-job-search/pages/job-search-results/job-search-results.component';
import { JobFiltersComponent } from './epic03-job-search/components/job-filters/job-filters.component';
import { JobService } from './epic03-job-search/services/job.service';

// Epic 04
import { InboxComponent } from './epic04-user-contact/pages/inbox/inbox.component';
import { ContactUserComponent } from './epic04-user-contact/pages/contact-user/contact-user.component';
import { MessageFormComponent } from './epic04-user-contact/components/message-form/message-form.component';
import { MessageService } from './epic04-user-contact/services/message.service';

// Epic 05
import { SupportChatComponent } from './epic05-chatbot-support/pages/support-chat/support-chat.component';
import { ChatbotComponent } from './epic05-chatbot-support/components/chatbot/chatbot.component';
import { ChatbotService } from './epic05-chatbot-support/services/chatbot.service';

// Epic 07
import { BestRatedCompaniesComponent } from './epic07-company-ranking/pages/best-rated-companies/best-rated-companies.component';
import { WorstRatedCompaniesComponent } from './epic07-company-ranking/pages/worst-rated-companies/worst-rated-companies.component';
import { CompanyRankingListComponent } from './epic07-company-ranking/components/company-ranking-list/company-ranking-list.component';
import { CompanyService } from './epic07-company-ranking/services/company.service';

// Epic 08
import { NearbyCompaniesComponent } from './epic08-map-notifications/pages/nearby-companies/nearby-companies.component';
import { MapboxMapComponent } from './epic08-map-notifications/components/mapbox-map/mapbox-map.component';
import { MapboxService } from './epic08-map-notifications/services/mapbox.service';
import { NotificationService } from './epic08-map-notifications/services/notification.service';

// Epic 09
import { AccessibilityInfoComponent } from './epic09-accessibility-i18n/pages/accessibility-info/accessibility-info.component';
import { LanguageSwitcherComponent } from './epic09-accessibility-i18n/components/language-switcher/language-switcher.component';
import { LanguageService } from './epic09-accessibility-i18n/services/language.service';

// Epic 10
import { SecurityInfoComponent } from './epic10-security-privacy/pages/security-info/security-info.component';
import { PasswordStrengthComponent } from './epic10-security-privacy/components/password-strength/password-strength.component';
import { CryptoService } from './epic10-security-privacy/services/crypto.service';
import { SecureAuthService } from './epic10-security-privacy/services/secure-auth.service';

// Payments
import { SubscriptionManagementPage } from './payments/pages/subscription-management/subscription-management.page';
import { SubscriptionCardComponent } from './payments/components/subscription-card/subscription-card.component';
import { SubscriptionService } from './payments/services/subscription.service';

// Translate loader function
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    TermsAndConditionsPage,
    AuthPortalComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    UserFormComponent,
    ProfileComponent,
    RecommendationListComponent,
    RecommendationFormComponent,
    RecommendationDetailComponent,
    CompanyRatingListComponent,
    CompanyRatingFormComponent,
    JobSearchResultsComponent,
    JobFiltersComponent,
    InboxComponent,
    ContactUserComponent,
    MessageFormComponent,
    SupportChatComponent,
    ChatbotComponent,
    BestRatedCompaniesComponent,
    WorstRatedCompaniesComponent,
    CompanyRankingListComponent,
    NearbyCompaniesComponent,
    MapboxMapComponent,
    AccessibilityInfoComponent,
    LanguageSwitcherComponent,
    SecurityInfoComponent,
    PasswordStrengthComponent,
    SubscriptionManagementPage,
    SubscriptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en_US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    RecommendationService,
    AuthService,
    CompanyRatingService,
    JobService,
    MessageService,
    ChatbotService,
    CompanyService,
    MapboxService,
    NotificationService,
    LanguageService,
    CryptoService,
    SecureAuthService,
    SubscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


