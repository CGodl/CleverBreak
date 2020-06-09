class FriendsController < ApplicationController 

  def create
    @friend = Friend.new
    @friend.author_id = current_user.id
    @friend.user_id = params[:id]
    unless @follow.save
      flash[:errors] = @follow.errors.full_messages
    end
    ###redirect to ???
  end

  def destroy
    @friend = Friend.find(params[:id])
    @friend.destroy
    ####redirect_to
  end

  def show
    

  end

  def index
    @friend = Friend.find_by(params[:id])

  end


end