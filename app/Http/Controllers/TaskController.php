<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function store(Request $request)
    {

        $task = new Task($request->all());
        $task->save();
    }

    public function getList()
    {
        return Task::all();
    }

    public function update(Request $request)
    {

        $id = $request->get('id');

        $task = Task::query()->where('id', $id)->first();

        return $task;

    }

    public function updateStore(Request $request) {

        $id = $request->get('id');
        $task = Task::query()->where('id', $id)->first();
        $task->name = $request->get('name');
        $task->description = $request->get('description');
        $task->status = $request->get('status');
        $task->save();

    }
}
