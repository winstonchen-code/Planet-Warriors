class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :point, :latitude, :longitude, :complete, :deadline, :max_user
end
