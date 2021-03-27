class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :title, :image
end
