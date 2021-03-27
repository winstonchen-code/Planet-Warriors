class Api::V1::UsersController < ApplicationController
<<<<<<< HEAD

  def index
    users = User.all
    render json:users
  end

=======
  def index
    users = User.all
    render json: users
  end
>>>>>>> 41d9950731f8c0b29c297228cbbc154d03ec1b64

  def create 
    user = User.create(user_params)
    if user.valid?
      token = JWT.encode({user_id: user.id}, "hackor")
      render json: {user: UserSerializer.new(user), token: token}, status: :created
    else 
      render json: {message: user.errors.full_messages}, status: :not_acceptable
    end
  end

  def autologin
    user = current_user ? current_user : {message: "Please log in"}
    render json: user
  end

  def captain 
    render json: {captain: User.captain[0].name, point: User.captain[1]}
  end

  # def update
  #   if current_user 
  #     current_user.update_attribute(:name, user_params[:name])
  #     current_user.update_attribute(:email, user_params[:email])
  #     current_user.update_attribute(:phone_number, user_params[:phone_number])

  #     render json: current_user
  #   else
  #      render json: {message: "You can not hack out system!!"}
  #   end
  # end

  private 

  def user_params
    params.permit(:email, :password, :password_confirmation, :name, :phone_number)
  end

end
