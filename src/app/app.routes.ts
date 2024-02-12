import { Routes } from '@angular/router';
import { PrimaryNavigationComponent } from './components/primary-navigation/primary-navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
    { path: '', component: PrimaryNavigationComponent, children: [
        { path: '', component: HomePageComponent },
        { path: 'contact', component: ContactUsPageComponent },
        { path: 'privacy-policy', component: PrivacyPolicyComponent },
        { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
    ] },
];
