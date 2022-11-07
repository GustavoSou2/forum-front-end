import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {Router} from "@angular/router";
import {PostService} from "../../http/modules/post/service/post.service";

interface IPost {
  title: string;
  message: string;
  has_tags: boolean;
  tags: string[];
  has_links: boolean;
  links: string[];
  has_images: boolean;
}
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  providers: [PostService]
})
export class CreatePostComponent implements OnInit {
  _form: IPost = {
    title: '',
    message: '',
    has_tags: false,
    tags: [],
    has_links: false,
    links: [],
    has_images: false
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
    toolbarHiddenButtons: [
      [
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  };

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setTags(description: string) {
   if (description.length != 0) this._form.tags = [...this._form.tags, description]
  }

  setLinks(description: string) {
   if (description.length != 0) this._form.links = [...this._form.links, description]
  }

  onSubmit() {
    this.postService.create({has_images: this._form.has_images, has_links: this._form.links.length == 0, has_tags: this._form.tags.length == 0, message: this._form.message, title: this._form.title})
      .subscribe(() => {
        this.router.navigate(['/home'])
      })
  }

}
