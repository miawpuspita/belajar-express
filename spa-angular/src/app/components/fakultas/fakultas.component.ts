import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-fakultas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxPaginationModule],
  templateUrl: './fakultas.component.html',
  styleUrls: ['./fakultas.component.css']
})
export class FakultasComponent implements OnInit {
  fakultas: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  apiUrl = 'https://crud-express-seven.vercel.app/api/fakultas';
  apiFakultasUrl = 'https://crud-express-seven.vercel.app/api/fakultas';
  isLoading = true;
  fakultasForm: FormGroup;
  isSubmitting = false;
  editFakultasId: string | null = null;

  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  constructor() {
    this.fakultasForm = this.fb.group({
      nama: [''],
      singkatan: ['']
    });
  }

  ngOnInit(): void {
    this.getFakultas();
  }

  getFakultas(): void {
    this.isLoading = true;
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.fakultas = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching fakultas data:', err);
        this.isLoading = false;
      }
    });
  }

  addFakultas(): void {
    if (this.fakultasForm.valid) {
      this.isSubmitting = true;
      this.http.post(this.apiUrl, this.fakultasForm.value).subscribe({
        next: (response) => {
          this.getFakultas();
          this.fakultasForm.reset();
          this.isSubmitting = false;
          const modalElement = document.getElementById('tambahFakultasModal') as HTMLElement;
          if (modalElement) {
            const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
            modalInstance.hide();
          }
        },
        error: (err) => {
          console.error('Error adding fakultas:', err);
          this.isSubmitting = false;
        }
      });
    }
  }

  deleteFakultas(_id: string): void {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      this.http.delete(`${this.apiFakultasUrl}/${_id}`).subscribe({
        next: () => {
          this.getFakultas();
        },
        error: (err) => {
          console.error('Error deleting fakultas:', err);
        }
      });
    }
  }

  getFakultasById(_id: string): void {
    this.editFakultasId = _id;
    this.http.get(`${this.apiFakultasUrl}/${_id}`).subscribe({
      next: (data: any) => {
        this.fakultasForm.patchValue({
          nama: data.nama,
          singkatan: data.singkatan,
        });

        const modalElement = document.getElementById('editFakultasModal') as HTMLElement;
        if (modalElement) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
          modalInstance.show();
        }
      },
      error: (err) => {
        console.error('Error fetching fakultas data by ID:', err);
      }
    });
  }

  updateFakultas(): void {
    if (this.fakultasForm.valid) {
      this.isSubmitting = true;
      this.http.put(`${this.apiFakultasUrl}/${this.editFakultasId}`, this.fakultasForm.value).subscribe({
        next: (response) => {
          this.getFakultas();
          this.isSubmitting = false;

          const modalElement = document.getElementById('editFakultasModal') as HTMLElement;
          if (modalElement) {
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance?.hide();
          }
        },
        error: (err) => {
          console.error('Error updating fakultas:', err);
          this.isSubmitting = false;
        }
      });
    }
  }
}
