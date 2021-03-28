class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :title, :image, :user_tasks, :tasks
end
