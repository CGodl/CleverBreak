<<<<<<< HEAD
class Api::FriendsController < ApplicationController





=======
class FriendsController < ApplicationController 

  def create
    @friend = Friend.new
    @friend.author_id = params[:id] 

  end



  def destroy

  end

  def show


  end

  def index

  end

>>>>>>> authentication

end