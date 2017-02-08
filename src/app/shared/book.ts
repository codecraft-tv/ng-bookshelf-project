export class Book {

  constructor(public id: string,
              public title: string,
              public subTitle: string,
              public authors: string[],
              public publisher: string,
              public publishDate: string,
              public description: string,
              public categories: string[],
              public thumbnail: string,
              public smallThumbnail: string) {
  }
}
