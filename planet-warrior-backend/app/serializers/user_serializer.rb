class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :title, :image, :user_tasks, :tasks, 
  :pending_tasks, :complete_tasks


end
