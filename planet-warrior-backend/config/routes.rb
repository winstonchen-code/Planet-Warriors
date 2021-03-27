Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      post "/users", to: "users#create"
      get "/users", to: "users#index"
      post "/login", to: "auth#login"
      # post "/edit", to: "users#update"
      get "/finduser", to: "users#find_user"
    end
  end

  get "/tasks", to: "tasks#index"
end
