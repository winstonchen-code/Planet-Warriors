class UserTasksController < ApplicationController

    def create
      user_task = UserTask.create(user_id: current_user.id, task_id: user_tasks_params[:task_id])
      render json: user_task
    end

    def update

    end

    def destroy

    end

    private

    def user_tasks_params
      params.require(:user_task).permit(:task_id)
    end

end
