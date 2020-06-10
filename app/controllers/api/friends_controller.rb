class FriendsController < ApplicationController 

  def create
    @friend = Friend.new
    @friend.requestor_id = current_user.id #ME
    @friend.requested_id = params[:id] #THEM
    unless @friend.save
      render json: ["Unable to establish friendship"]
    end
  end

  def destroy
    @friend = Friend.find(params[:user_id])
    @friend.destroy
    render 'api/friends/index'
  end


  def show
    @friend = Friend.find(params[:id])
    if @friend
      render :show
    else
      render json: ["Unable to find user"]
    end
  end



  def index
    # @friend = Friend.find_by(params[:user_id])
    @friends 


  end


end