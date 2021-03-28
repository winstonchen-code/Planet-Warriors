Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      post "/users", to: "users#create"
      get "/users", to: "users#index"
      post "/login", to: "auth#login"
      get "/autologin", to: "users#autologin"
      get "/captain", to: "users#captain"
      # post "/edit", to: "users#update"
    end
  end

  get "/tasks", to: "tasks#index"
  post "/newtask", to: "user_tasks#create"
  patch "/tasks/:id", to: "tasks#update"
end
