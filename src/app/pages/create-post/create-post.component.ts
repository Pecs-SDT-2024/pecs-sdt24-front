import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
    user: string = "Some user";
    constructor(private articleService : ArticlesService, private router: Router) {}

    ngOnInit(): void {}

    createPost(data:any) {
        try {
            let now = new Date()
            // Passing the data from the html form and adding a user property to it, then posting
            console.log({...data, Posted: now})
            return this.articleService.createArticle({...data, Posted: now}).subscribe((result) => {
                // Go back to some page
                this.router.navigateByUrl("/")
            });
        } catch (err) {
            console.log(err)
            return;
        }

    }
}
