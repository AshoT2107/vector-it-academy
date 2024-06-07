import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentsService } from "../../services/student.service";
import { ICourse } from "@models/shared/i-course";

@Component({
  selector: "course-details",
  template: `course details`,
  standalone: true,
})
export default class CourseDetailsComponent implements OnInit {

  private router = inject(Router)
  private route = inject(ActivatedRoute);
  private studentService = inject(StudentsService);
  private courseId = ""

  
  courseDetails?: ICourse;

  ngOnInit() {
    // this.courseId = this.route.snapshot.params["id"];
    // this.studentService.getCourse(this.courseId).subscribe(course=>{
    //     console.log(course);
    // })
    
    this.route.queryParams.subscribe(query=>{
        console.log(query)
    })
    this.courseDetails = this.route.snapshot.data["courseDetails"];
    console.log(this.courseDetails);
  }
}
