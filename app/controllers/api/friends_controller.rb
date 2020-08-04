class Api::FriendsController < ApplicationController 
  before_action :require_logged_in
  
  def create
    requested_friend = User.find_by(email: [:email])
    already_friend = Friend.find_by({requestor_id: current_user.id, requested_id: requested_friend.id })
    #Make sure the opposite also returns false

    if requested_friend && !already_friend
      friend = Friend.new({requestor_id: current_user.id, requested_id: requested_friend.id })
      # ////
      if friend.save
        render 'api/friends/show'
      end
    else
      # ////
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
    friend = Friend.find(params[:id])
    if friend
      render :show
    else
      render json: ["Unable to find user"]
    end
  end

  def index
    @friends = current_user.friends
  end


end