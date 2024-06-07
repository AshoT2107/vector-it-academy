import { Routes } from "@angular/router";
import { MentorComponent } from "./mentor/mentor.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import studentsRoutes from "./students/students.routes";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./core/layouts/layout-container.component"),
    children: [
      { path: "admin", loadComponent: () => import("./admin/admin.component") },
      { path: "mentor", component: MentorComponent },
      {
        path: "students",
        loadChildren: () => import("./students/students.routes"),
      },
    ],
  },
  { path: "**", redirectTo: "not-found" },
  { path: "not-found", component: NotFoundComponent },
];
