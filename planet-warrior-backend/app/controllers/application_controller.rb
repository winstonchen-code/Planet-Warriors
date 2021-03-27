class ApplicationController < ActionController::API

  def current_user
    if request.headers["Authorization"]
      headers = request.headers["Authorization"]
      token = headers.split(" ")[1]
      if token != "undefined" && JWT.decode(token, "hackor")[0]["user_id"]
        user_id = JWT.decode(token, "hackor")[0]["user_id"]
        return User.find(user_id)
      end
    end
  end

  def logged_in?
    !!current_user
  end
  
  def authorized
    render json: { message: "Please log in"}, status: :unauthorized unless logged_in?
  end
end
