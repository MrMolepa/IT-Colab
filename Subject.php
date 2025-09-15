<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class Subject extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'subject_number',
        'component_number',
        'script_fee',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'script_fee' => 'decimal:2',
    ];

    /**
     * Validation rules for the model.
     *
     * @return array
     */
    public static function rules($id = null)
    {
        return [
            'subject_number' => 'required|string|max:50',
            'component_number' => 'required|string|max:50',
            'script_fee' => 'required|numeric|min:0|max:999999.99',
        ];
    }

    /**
     * Custom validation messages.
     *
     * @return array
     */
    public static function messages()
    {
        return [
            'subject_number.required' => 'Subject number is required',
            'component_number.required' => 'Component number is required',
            'script_fee.required' => 'Script fee is required',
            'script_fee.numeric' => 'Script fee must be a number',
            'script_fee.min' => 'Script fee must be at least 0',
        ];
    }


    /**
     * Validate the model attributes.
     *
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    public function validate()
    {
        $validator = Validator::make($this->attributes, static::rules($this->id));
        
        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        // Validate the model before saving
        static::saving(function ($model) {
            $model->validate();
        });
    }
}
