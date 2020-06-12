json.partial! './api/users/user.json.jbuilder', user: @user
json.friendIds do
  json.array! @user.friends.pluck(:id)
end
