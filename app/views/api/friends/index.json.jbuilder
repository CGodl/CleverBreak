json.array! @friends do |friend|
  json.partial! 'api/friends/friend', friend: friend
end