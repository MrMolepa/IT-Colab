<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubjectController;

// Main route that serves the single-page application
Route::get('/', [SubjectController::class, 'index'])->name('subjects.index');

// API Routes for Subjects
Route::prefix('subjects')->group(function () {
    // Get all subjects (for DataTable)
    Route::get('/', [SubjectController::class, 'list'])->name('subjects.list');
    
    // Store a new subject
    Route::post('/', [SubjectController::class, 'store'])->name('subjects.store');
    
    // Get a single subject (for editing)
    Route::get('/{id}', [SubjectController::class, 'show'])->name('subjects.show');
    
    // Update a subject
    Route::put('/{id}', [SubjectController::class, 'update'])->name('subjects.update');
    
    // Delete a subject
    Route::delete('/{id}', [SubjectController::class, 'destroy'])->name('subjects.destroy');
});
