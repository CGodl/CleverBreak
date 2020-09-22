class Api::FriendsController < ApplicationController 
  before_action :require_logged_in
  
  def create
    friend_email = params[:friend][:email]
    
    requested_friend = User.find_by(email: friend_email)
        
    already_friend = Friend.find_by({requestor_id: current_user.id, requested_id: requested_friend.id })
  
    if requested_friend && !already_friend
      
      @friend = Friend.new({requestor_id: current_user.id, requested_id: requested_friend.id })

      if @friend.save
        render :show
      end
    else
      render json: ["Unable to establish friendship"]
    end
  end

  def destroy
    friend = Friend.find(requestor_id: current_user.id, requested_id: params[:id])
      # @friend = current_user.Friend.find_by(requested_id: params[:id])
    friend.destroy
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
    @friends = current_user.friends
  end

  private

  def friend_params
    params.require(:friend).permit(:requestor_id, :requested_id, :email)
  end

  # def user_params
  #   params.require(:user).permit(:email, :password, :name)
  # end


end