import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { SideComponent } from '../../layout/side/side.component';
import { RecentComponent } from '../../layout/recent/recent.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

// Material Styles
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { of } from 'rxjs/internal/observable/of';

describe('SinglePostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PostComponent,
                HeaderComponent,
                SideComponent,
                RecentComponent,
                FooterComponent,
            ],
            imports: [
                BrowserAnimationsModule,
                MatDividerModule,
                MatInputModule,
                MatIconModule,
                MatToolbarModule,
                MatMenuModule,
                MatDialogModule,
                HttpClientModule,
            ],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: [] },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({ id: 0 }),
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
