import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CreatePostComponent } from './create-post.component';
import {FormsModule} from '@angular/forms';
// Material Styles
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

describe('WritePostComponent', () => {
    let component: CreatePostComponent;
    let fixture: ComponentFixture<CreatePostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CreatePostComponent,
                HeaderComponent,
                FooterComponent,
            ],
            imports: [
                HttpClientModule,
                MatIconModule,
                MatToolbarModule,
                MatMenuModule,
                MatDialogModule,
                FormsModule,
                BrowserAnimationsModule
            ],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: [] },
            ],
        })
        .compileComponents();

        fixture = TestBed.createComponent(CreatePostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
