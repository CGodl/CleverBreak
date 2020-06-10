class FriendsController < ApplicationController 

  def create
    @friend = Friend.new
    @friend.author_id = current_user.id
    @friend.user_id = params[:id]
    unless @follow.save
      render json: ["Unable to establish friendship"]
    end
  end

  def destroy
    @friend = Friend.find(params[:user_id])
    @friend.destroy
  end


  def show
    if params[:id]
      @friend = Friend.where(user_id: params[:author_id])
    end
  end



  def index
    # @friend = Friend.find_by(params[:user_id])
    @friends 


  end


end