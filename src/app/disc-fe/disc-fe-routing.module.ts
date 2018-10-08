import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './auth/auth.guard';
import { TestQuestionsComponent } from './components/test-questions/test-questions.component';

const routes: Routes = [
    { path: 'testQ', component: TestQuestionsComponent }
    // { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // providers: [AuthGuard]
})

export class DiscFeRoutingModule {

}
