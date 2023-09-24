import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {
        path: 'to-do-list',
        loadChildren: () => import('../pages/to-do-list/to-do-list.module').then( m => m.ToDoListPageModule)
      },
      {
        path: 'add-task',
        loadChildren: () => import('../pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
      },
      {
        path: 'goals',
        loadChildren: () => import('../pages/goals/goals.module').then( m => m.GoalsPageModule)
      },
      {
        path: 'add-goal',
        loadChildren: () => import('../pages/add-goal/add-goal.module').then( m => m.AddGoalPageModule)
      },
      {
        path: 'achievements',
        loadChildren: () => import('../pages/achievements/achievements.module').then( m => m.AchievementsPageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('../pages/notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: 'add-note',
        loadChildren: () => import('../pages/add-note/add-note.module').then( m => m.AddNotePageModule)
      },
      {
        path: 'video-diary',
        loadChildren: () => import('../pages/video-diary/video-diary.module').then( m => m.VideoDiaryPageModule)
      },
      {
        path: 'images-diary',
        loadChildren: () => import('../pages/images-diary/images-diary.module').then( m => m.ImagesDiaryPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/to-do-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/to-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
