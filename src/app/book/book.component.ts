import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GoogleBooksService} from "../shared/google-books.service";
import {Book} from "../shared/book";
import {LibraryService} from "../shared/library.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  loading: boolean = false;
  book: any;

  constructor(private route: ActivatedRoute,
              private googleBooksService: GoogleBooksService,
              private libraryService: LibraryService) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['bookId']) {
        this.getBook(params['bookId'])
      }
    });
  }

  getBook(bookId: string) {
    this.loading = true;
    this.googleBooksService.retrieveBook(bookId)
      .do(_ => this.loading = false)
      .subscribe(book => this.book = book);
  }

  hasBook(book: Book): boolean {
    if (book) {
      return this.libraryService.hasBook(book)
    }
  }

  addBook(book: Book) {
    if (book) {
      return this.libraryService.addBook(book)
    }
  }

  removeBook(book: Book) {
    if (book) {
      if (this.libraryService.hasBook(book)) {
        this.libraryService.removeBook(book)
      } else {
        this.libraryService.addBook(book)
      }
    }
  }

}


/*
 {
 "kind": "books#volume",
 "id": "R4CbtfeExO0C",
 "etag": "nAGb5/HdTSA",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/R4CbtfeExO0C",
 "volumeInfo": {
 "title": "You Are Here",
 "subtitle": "Discovering the Magic of the Present Moment",
 "authors": [
 "Thich Nhat Hanh"
 ],
 "publisher": "Shambhala Publications",
 "publishedDate": "2010-12-21",
 "description": "This moment is the gateway to enlightenment. It is the only moment we have to be joyful, mindful, and awake. The key is to be there for yourself—to learn to be fully present in your life. This, Thich Nhat Hanh explains, is the heart of Buddhist practice. In this introduction to the practice of presence, the beloved Buddhist teacher provides indispensable insight on the essentials of Buddhist thought and offers a range of simple, everyday practices for cultivating mindfulness. These teachings empower us to witness the wonder of life and transform our suffering, both within us and around us, into compassion, tenderness, and peace—not in some long and hard struggle, but in this very moment. As Thich Nhat Hanh declares, \"the energy of mindfulness is the energy of the Buddha, and it can be produced by anybody.\" It’s as simple as breathing in and breathing out.",
 "industryIdentifiers": [
 {
 "type": "ISBN_10",
 "identifier": "0834821117"
 },
 {
 "type": "ISBN_13",
 "identifier": "9780834821118"
 }
 ],
 "readingModes": {
 "text": true,
 "image": true
 },
 "pageCount": 160,
 "printedPageCount": 162,
 "dimensions": {
 "height": "12.70 cm",
 "width": "19.70 cm"
 },
 "printType": "BOOK",
 "categories": [
 "Religion / Buddhism / Zen",
 "Religion / Buddhism / Rituals & Practice",
 "Religion / Buddhism / General"
 ],
 "maturityRating": "NOT_MATURE",
 "allowAnonLogging": true,
 "contentVersion": "0.6.7.0.preview.3",
 "panelizationSummary": {
 "containsEpubBubbles": false,
 "containsImageBubbles": false
 },
 "imageLinks": {
 "smallThumbnail": "http://books.google.com/books/content?id=R4CbtfeExO0C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73Kex8rkPg2HNpixffjpRkoKEq3dJiIcPTsQJV3K5ZMXMby_pl-K_xVcBJBKYaaKChDd1doAQX3RB603aGGmcXHXBemcjxQ0eDLq0s2DgwKKK0xbU8a_6N1fKwU6zAPHuACZzcl&source=gbs_api",
 "thumbnail": "http://books.google.com/books/content?id=R4CbtfeExO0C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71NxpuWELNpaV7_l84BdKY0yjt2fA7Pa_aZ8gzOZcAqvTkg3k4CdaZ2gz5uJQ17lLaxnpOr48KEtpxdeFDrZnyxpoUFiGYlJ5xznZOXitGcvXWKZQM2UoF4r7Fa8rBR0jppJfBE&source=gbs_api",
 "small": "http://books.google.com/books/content?id=R4CbtfeExO0C&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70bdzELoYpq22onj7kdhqnrZzDNS7nfxvcm5YVSAmMizflrlnjd2XJXOoOb1jjw84bSjgW0_mOBmfWRBUuDm1iN_tfOgDmlOdCm9gfGpmPaIuiIQGhpz4UjX0McRWCQJE7567qa&source=gbs_api",
 "medium": "http://books.google.com/books/content?id=R4CbtfeExO0C&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70soKoTR3ghOXHlOWjBWHAViPZop-iSJ4a76XdOP2oDZ3exSjbK3el_UZWDRwvRhzAV3ZlrcaWyi4xbO7Dt1RhwutYZ1TqpW0Wl6Teyat9x4kPJ5kR_jYaIAVAyiYOtftGv4jQ6&source=gbs_api",
 "large": "http://books.google.com/books/content?id=R4CbtfeExO0C&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71_KL29m3s9EHpkE8oxRBcMUqugVIrvB8F9Gp9crRSP1oenIA24-thxrzXOb1mK7ev1FhUBn1aF0uJzQ-EmNm91KsJlbzHm3DknnVQnsD01ic9HBmpqLty9p-Dh7lluSwSIyTFP&source=gbs_api",
 "extraLarge": "http://books.google.com/books/content?id=R4CbtfeExO0C&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE71fHk9kR2DfXPxiKyM8uC-jNKbOxqUast8WbxbL0dN3XL0cd5wndO9CRCwDW_2uTLPky5Ak20MXFUd0oearKf9MGYNzwTDgwfuNrZVLKU59eZH3JIk8zHk6cAnoO3YdBkoIEcJu&source=gbs_api"
 },
 "language": "en",
 "previewLink": "http://books.google.co.uk/books?id=R4CbtfeExO0C&hl=&source=gbs_api",
 "infoLink": "https://play.google.com/store/books/details?id=R4CbtfeExO0C&source=gbs_api",
 "canonicalVolumeLink": "https://market.android.com/details?id=book-R4CbtfeExO0C"
 },
 "layerInfo": {
 "layers": [
 {
 "layerId": "geo",
 "volumeAnnotationsVersion": "14"
 }
 ]
 },
 "saleInfo": {
 "country": "GB",
 "saleability": "FOR_SALE",
 "isEbook": true,
 "listPrice": {
 "amount": 13.53,
 "currencyCode": "GBP"
 },
 "retailPrice": {
 "amount": 9.2,
 "currencyCode": "GBP"
 },
 "buyLink": "https://play.google.com/store/books/details?id=R4CbtfeExO0C&rdid=book-R4CbtfeExO0C&rdot=1&source=gbs_api",
 "offers": [
 {
 "finskyOfferType": 1,
 "listPrice": {
 "amountInMicros": 1.353E7,
 "currencyCode": "GBP"
 },
 "retailPrice": {
 "amountInMicros": 9200000.0,
 "currencyCode": "GBP"
 },
 "giftable": true
 }
 ]
 },
 "accessInfo": {
 "country": "GB",
 "viewability": "PARTIAL",
 "embeddable": true,
 "publicDomain": false,
 "textToSpeechPermission": "ALLOWED",
 "epub": {
 "isAvailable": true,
 "acsTokenLink": "http://books.google.co.uk/books/download/You_Are_Here-sample-epub.acsm?id=R4CbtfeExO0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 },
 "pdf": {
 "isAvailable": true,
 "acsTokenLink": "http://books.google.co.uk/books/download/You_Are_Here-sample-pdf.acsm?id=R4CbtfeExO0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 },
 "webReaderLink": "http://books.google.co.uk/books/reader?id=R4CbtfeExO0C&hl=&printsec=frontcover&output=reader&source=gbs_api",
 "accessViewStatus": "SAMPLE",
 "quoteSharingAllowed": false
 }
 }

 */
