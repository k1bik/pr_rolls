# frozen_string_literal: true

class SitemapController < ApplicationController
  def show
    @urls = [
      { loc: root_url, changefreq: "weekly", priority: "1.0" }
    ]
    response.headers["Content-Type"] = "application/xml; charset=utf-8"
    render formats: :xml, layout: false
  end
end
