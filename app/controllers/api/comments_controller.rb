class Api::CommentsController < ApplicationController 

  def create
    recipients = User.find_by(id: [:id])

    @comment = Comment.new(comment_params)

      
    if @comment.save!
        render :show
    else
      render json: ["Could not create comment"]
    end
  end

  def destroy
    @comment = Bill.find_by(comment: [:id]) 

    if @comment
      @comment.destroy
    else
      render json: ['comment could not be found']
    end

  end

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])

    if @comment
      render :show
    else
      render json: ["Unable to find comment"]
    end
  end


  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :show
    else
      render json: ['Comment could not be deleted']
    end

  end


  private

  def comment_params
    params.require(:comment).permit(:author_id, :bill_id, :text_body, :updated_at)
  end

end