<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class SubjectController extends Controller
{
    /**
     * Display the subjects view with form and table.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('subjects.index');
    }

    /**
     * Get all subjects in JSON format
     *
     * @return JsonResponse
     */
    public function list(): JsonResponse
    {
        $subjects = Subject::orderBy('subject_number')
            ->orderBy('component_number')
            ->get();
            
        return response()->json(['data' => $subjects]);
    }

    /**
     * Store a newly created subject in storage.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate(Subject::rules());
            
            $subject = Subject::create($validated);
            
            return response()->json([
                'success' => true,
                'message' => 'Subject created successfully',
                'data' => $subject
            ], 201);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error creating subject',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified subject.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id): JsonResponse
    {
        try {
            $subject = Subject::findOrFail($id);
            
            return response()->json([
                'success' => true,
                'data' => $subject
            ]);
            
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Subject not found',
                'error' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error retrieving subject',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified subject in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        try {
            $subject = Subject::findOrFail($id);
            
            $validated = $request->validate(Subject::rules($id));
            
            $subject->update($validated);
            
            return response()->json([
                'success' => true,
                'message' => 'Subject updated successfully',
                'data' => $subject
            ]);
            
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Subject not found',
                'error' => $e->getMessage()
            ], 404);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error updating subject',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified subject from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        try {
            $subject = Subject::findOrFail($id);
            $subject->delete();
            
            return response()->json([
                'success' => true,
                'message' => 'Subject deleted successfully'
            ]);
            
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Subject not found',
                'error' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error deleting subject',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
