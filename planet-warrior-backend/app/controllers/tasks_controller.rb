class TasksController < ApplicationController

  def index 
    tasks = Task.all
    render json: tasks
  end

  def update
    task = Task.find(params[:id])
    task.update(complete: true)
    render json: task
  end

end
