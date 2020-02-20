<?php

namespace App\Http\Controllers;

use App\Comment;
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
        $task['comments'] = $task->comments;
        return $task;
    }

    public function updateStore(Request $request) {

        $id = $request->get('id');
        $task = Task::query()->where('id', $id)->first();
        $task->status = $request->get('status');
        $task->save();

        if ($request->get('comment') != null) {
            $comment = new Comment();
            $comment->comment = $request->get('comment');
            $comment->task_id = $id;
            $comment->save();
        }
    }

    public function getJson()
    {
        $json = (string)Task::all();
        return $json;
    }

}
